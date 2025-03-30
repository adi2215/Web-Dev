from django.db import models

from category.models import Category


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.CharField(max_length=255)

    def __str__(self):
        return f"name: {self.name}, price: {self.price}, count: {self.count}"

    # def to_dict(self):
    #     return {
    #         'name': self.name,
    #         'price': str(self.price),
    #         'description': self.description,
    #         'count': self.count,
    #         'is_active': self.is_active,
    #     }

    def to_json(self):
        return {
            'name': self.name,
            'price': self.price,
            'count': self.count,
            'is_active': self.is_active,
            'description': self.description,
            'category': self.category
        }
