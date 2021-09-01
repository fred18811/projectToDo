from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from todo.models import Project, ToDo
from todo.serializers import ProjectModelSerializer, ToDoModelSerializer

from todo.utils import TenResultsSetPagination, TwentyResultsSetPagination


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = TenResultsSetPagination

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        projects = Project.objects.all()
        if name:
            projects = projects.filter(name__contains=name)
        return projects


class ToDotViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = TwentyResultsSetPagination

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        if instance.is_active:
            instance.is_active = False
            instance.save()
        return Response(serializer.data)

    def get_queryset(self):
        name_project = self.request.query_params.get('project', '')
        todos = ToDo.objects.all()
        if name_project:
            todos = todos.filter(project__name__contains=name_project)
        return todos
