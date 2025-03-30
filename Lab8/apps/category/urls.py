from django.urls import path, re_path

from category.views import get_categories, get_category

urlpatterns = [

    path('', get_categories),
    path('<int:pk>/', get_category),
]