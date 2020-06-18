from rest_framework import serializers
from .models import Restaurant

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'foodtype', 'street_address', 'city', 'state', 'zip_code', 'phone', 'email', 'rating', 'photo')