from category.models import Category

from django.http.response import JsonResponse

from product.models import Product


def get_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def get_one_product(request, pk=None):
    try:
        product = Product.objects.get(id=pk)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def products_by_category(request, category):
    try:
        products = Product.objects.filter(category=category)
        products_by_category_response = [product.to_json() for product in products]
        return JsonResponse(products_by_category_response, safe=False)
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


