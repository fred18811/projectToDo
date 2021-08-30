from rest_framework import serializers
from todo.models import Project, ToDo


class ProjectModelSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    project = serializers.StringRelatedField()

    class Meta:
        model = ToDo
        fields = '__all__'
