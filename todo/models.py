from django.db import models

from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=128)
    url = models.URLField()
    users = models.ManyToManyField(User)


class ToDo(models.Model):
    project = models.ForeignKey(Project, models.PROTECT)
    text = models.TextField()
    data_create = models.DateTimeField(auto_now_add=True)
    data_update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, models.PROTECT)
    is_active = models.BooleanField(default=True)
