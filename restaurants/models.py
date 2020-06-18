from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=300)
    foodtype = models.CharField(max_length=300)
    street_address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=5)
    phone = models.CharField(max_length=30)
    email = models.EmailField()
    rating = models.IntegerField()
    photo = models.ImageField(default="default.png")
    created_at = models.DateTimeField(auto_now_add=True)

#TODO Add menus 