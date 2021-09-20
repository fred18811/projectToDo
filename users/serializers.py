from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import User


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class UserModelUpdateSerializer(UserModelSerializer):
    class Meta(UserModelSerializer.Meta):
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_staff')
