import graphene
from graphene_django import DjangoObjectType
from users.models import User
from todo.models import Project, ToDo


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class Query(graphene.ObjectType):
    users = graphene.List(UserType, first_name=graphene.String(), last_name=graphene.String())
    projects = graphene.List(ProjectType, name=graphene.String())
    todo = graphene.List(ToDoType, user=graphene.String())

    def resolve_users(self, info, first_name=None, last_name=None):
        filter_user = User.objects.all()
        if first_name and last_name:
            return User.objects.filter(first_name=first_name, last_name=last_name)
        if first_name:
            return User.objects.filter(first_name=first_name)
        if last_name:
            return User.objects.filter(last_name=last_name)
        return User.objects.all()

    def resolve_projects(self, info, name=None):
        if name:
            return Project.objects.filter(name=name)
        return Project.objects.all()

    def resolve_todo(self, info, user=None):
        if user:
            return ToDo.objects.filter(user__first_name=user)
        return ToDo.objects.all()


schema = graphene.Schema(query=Query)
