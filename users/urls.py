from django.urls import path, include

from rest_framework.routers import DefaultRouter
from users import views

users_router = DefaultRouter
users_router.register('users', views.UserViewSet, basename='users')

urlpatterns = [
    path('users/', include(users_router.urls)),
]
