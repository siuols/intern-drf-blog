from rest_framework import serializers

from .models import Category, Tag, Post

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('title', 'date_created', 'date_modified')

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('title', 'date_created', 'date_modified')

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'subtitle', 'banner_photo', 'tags', 'category', 'body', 'status')
