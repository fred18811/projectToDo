from django.core.management.base import BaseCommand

from users.models import User


class Command(BaseCommand):
    help = 'Create users and superuser'

    def add_arguments(self, parser):
        parser.add_argument('count', type=int)

    def handle(self, *args, **options):
        User.objects.all().delete()
        User.objects.create_superuser('django', 'django@test.ru', 'geekbrains', first_name=f'Superestr',
                                      last_name=f'Superesterov')
        count = options['count']
        for i in range(count):
            User.objects.create_user(f'User{i}', f'test{i}@test.ru', 'qwer1234', first_name=f'Tester{i}',
                                     last_name=f'Testerov{i}')
