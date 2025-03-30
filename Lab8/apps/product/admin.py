from django.contrib import admin

# Register your models here.
from product.models import Product

# admin.site.register(Product)


@admin.register(Product)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')
    search_fields = ('name', 'description')
