from rest_framework import mixins, viewsets
from rest_framework.renderers import JSONRenderer
from users.models import User
from users.serializers import UserModelSerializer, UserModelUpdateSerializer


class UserViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    #renderer_classes = [JSONRenderer]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelUpdateSerializer
        return UserModelSerializer
