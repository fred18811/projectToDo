from django_filters import rest_framework as filters

from todo.models import ToDo, Project


class ToDoFilter(filters.FilterSet):
    project = filters.CharFilter(field_name="project__name", lookup_expr='contains')
    data_create = filters.DateTimeFromToRangeFilter(field_name='data_create')

    class Meta:
        model = ToDo
        fields = ['project', 'data_create']


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(field_name="name", lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']
