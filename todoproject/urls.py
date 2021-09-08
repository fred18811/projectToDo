from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views

from todo.views import ProjectViewSet, ToDotViewSet
from users.views import UserViewSet

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('projects', ProjectViewSet)
router.register('todo', ToDotViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
]
