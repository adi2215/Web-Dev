from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'name': self.name,
            'id': self.id
        }


