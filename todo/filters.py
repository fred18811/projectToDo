from django_filters import rest_framework as filters

from todo.models import ToDo, Project


class ToDoFilter(filters.FilterSet):
    project = filters.CharFilter(field_name="project__name", lookup_expr='contains')
    date_start = filters.DateTimeFilter(field_name="data_create", lookup_expr='gte')
    date_end = filters.DateTimeFilter(field_name="data_create", lookup_expr='lte')

    class Meta:
        model = ToDo
        fields = ['project', 'date_start', 'date_end']


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(field_name="name", lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']
