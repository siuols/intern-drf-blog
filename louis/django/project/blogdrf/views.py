from django.shortcuts import get_object_or_404

from django.shortcuts import render

from rest_framework import viewsets

from rest_framework.response import Response

from .models import Category, Tag, Post

from .serializers import CategorySerializer, TagSerializer, PostSerializer

# Create your views here.

class CategoryViewSet(viewsets.ViewSet):
    def list(self ,request):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

class TagViewSet(viewsets.ViewSet):
    def list(self ,request):
        queryset = Tag.objects.all()
        serializer = TagSerializer(queryset, many=True)
        return Response(serializer.data)

class PostViewSet(viewsets.ViewSet):
    def list(self ,request):
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)
