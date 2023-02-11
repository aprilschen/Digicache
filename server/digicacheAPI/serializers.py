from rest_framework import serializers
from .models import Cache

class CacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cache
        fields = ['id',
                  'username',
                  'email',
                  'date',
                  'time',
                  'title',
                  'latitude',
                  'longitude',
                  'description',
                  'tags',
                  # 'image',
                ]