from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

from todo.models import Project, ToDo
from todo.serializers import ProjectModelSerializer, ToDoModelSerializer

from todo.filters import ToDoFilter, ProjectFilter
from todo.utils import TenResultsSetPagination, TwentyResultsSetPagination


class ProjectViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = TenResultsSetPagination
    filterset_class = ProjectFilter


class ToDotViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer]
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = TwentyResultsSetPagination
    filterset_class = ToDoFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        if instance.is_active:
            instance.is_active = False
            instance.save()
        return Response(serializer.data)
