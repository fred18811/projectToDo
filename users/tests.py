from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient

from users.models import User
from users.views import UserViewSet


class TestUserViewSet(TestCase):

    def setUp(self):
        self.super_user = get_user_model().objects.create_superuser(
            'django', 'django@test.local', 'geekbrains'
        )
        self.user = get_user_model().objects.create_user(
            'user_1111', 'user_1111@test.local', '123456789'
        )

    def test_get_list_guest(self):
        factory = APIRequestFactory()
        requests = factory.get('/api/users/')
        view = UserViewSet.as_view({'get': 'list'})
        response = view(requests)
        # response.render()
        # print(dir(response.content))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_list_auth(self):
        # print(self.user.username, self.user.email, self.user.password)
        factory = APIRequestFactory()
        requests = factory.get('/api/users/')
        force_authenticate(requests, user=self.user)
        view = UserViewSet.as_view({'get': 'list'})
        response = view(requests)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail_guest(self):
        user = User.objects.create_user(username='user_test', email='user_test@test.locacl', password='12345678')
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail_auth(self):
        user = User.objects.create_user(username='user_test', email='user_test@test.locacl', password='12345678')
        client = APIClient()
        client.force_authenticate(user=self.user)
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
