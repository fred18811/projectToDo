from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase
from mixer.backend.django import mixer

from todo.models import Project
from users.models import User


class TestProjectViewSet(APITestCase):

    def setUp(self):
        self.super_user = get_user_model().objects.create_superuser(
            'django', 'django@test.local', 'geekbrains'
        )
        self.user = get_user_model().objects.create_user(
            'user_1111', 'user_1111@test.local', '123456789'
        )
        self.user1 = mixer.blend(User)
        self.user2 = mixer.blend(User)
        self.project = Project.objects.create(name='TestProject', url='https://local.ru')
        self.project.users.set([self.user1.pk, self.user2.pk])

    def test_get_list(self):
        self.client.login(username='django', password='geekbrains')
        response = self.client.get('/api/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        response = self.client.get(f'/api/projects/{self.project.id}/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        self.client.force_login(user=self.super_user)
        response = self.client.get(f'/api/projects/{self.project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        self.client.force_login(user=self.user)
        response = self.client.get(f'/api/projects/{self.project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        project = mixer.blend(Project)
        self.client.force_login(user=self.super_user)
        response = self.client.patch(f'/api/projects/{project.id}/', {'name': 'Project1111'})
        project = Project.objects.get(id=project.id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(project.name, 'Project1111')
