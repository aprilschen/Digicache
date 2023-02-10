from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes

# returns a list of all caches, probably in paginated order(?)
@api_view(['GET',])
def Caches(request):
    return Response ({"message": "Success"})