from rest_framework import serializers
from todo.models import Project, ToDo


class ProjectModelSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(serializers.ModelSerializer):
    #user = serializers.HyperlinkedRelatedField(view_name='user-detail', read_only=True)
    #project = serializers.HyperlinkedRelatedField(view_name='project-detail', read_only=True)

    class Meta:
        model = ToDo
        fields = '__all__'
