from rest_framework.pagination import PageNumberPagination


class TenResultsSetPagination(PageNumberPagination):
    page_size = 10


class TwentyResultsSetPagination(PageNumberPagination):
    page_size = 20
