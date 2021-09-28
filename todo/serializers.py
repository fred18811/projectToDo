from rest_framework import serializers
from todo.models import Project, ToDo


class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ProjectModelSerializerGet(ProjectModelSerializer):
    users = serializers.StringRelatedField(many=True)


class ToDoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'


class ToDoModelSerializerGet(ToDoModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    project = serializers.StringRelatedField(read_only=True)
