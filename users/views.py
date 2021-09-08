from rest_framework import mixins, viewsets
from rest_framework.renderers import JSONRenderer
from users.models import User
from users.serializers import UserModelSerializer


class UserViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    #renderer_classes = [JSONRenderer]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
