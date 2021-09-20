from django.db import models

from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=128, verbose_name='Имя')
    url = models.URLField()
    users = models.ManyToManyField(User, verbose_name='Пользователи')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = "Проекты"
        ordering = ['pk']


class ToDo(models.Model):
    project = models.ForeignKey(Project, models.PROTECT, verbose_name='Проект')
    text = models.TextField(verbose_name='Текст')
    data_create = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    data_update = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    user = models.ForeignKey(User, models.PROTECT, verbose_name='Пользователи')
    is_active = models.BooleanField(default=True, verbose_name='Активно')

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = "Задачи"
        ordering = ['pk']
