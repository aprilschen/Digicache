from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from .models import Cache
from .serializers import CacheSerializer

# returns a list of all caches, probably in paginated order(?)
@api_view(['GET', 'POST'])
def Caches(request):
    if request.method=='GET':
        queryset = Cache.objects.all()
        data = CacheSerializer(queryset, many=True)
        return Response ({"data": data.data})

    if request.method=='POST':
        serialized_item = CacheSerializer(data = request.data)
        serialized_item.is_valid(raise_exception=True)
        serialized_item.save()
        return Response({"message": "Cache created"}, 201)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def SingleCache(request, pk):
    return Response ({"message": "You have reached Single Cache"})
