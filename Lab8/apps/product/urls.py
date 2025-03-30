from django.urls import path, re_path

from product.views import get_products, get_one_product

urlpatterns = [

    path('', get_products),
    path('<int:pk>/', get_one_product),

]