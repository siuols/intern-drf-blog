from django.utils.timesince import timesince

from rest_framework import serializers

from .models import Category, Tag, Post

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'title',
            'date_created',
            'date_modified'
        )

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = (
            'id',
            'title',
            'date_created',
            'date_modified'
        )

class PostSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    date_display = serializers.SerializerMethodField()
    timesince = serializers.SerializerMethodField()
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'subtitle',
            'banner_photo',
            'tags',
            # 'tag',
            'category',
            'category_name',
            'body',
            'status',
            'date_created',
            'date_modified',
            'date_display',
            'timesince'
        )


    def get_category_name(self, instance):
        return instance.category.title

    def get_date_display(self, instance):
        return instance.date_created.strftime("%b %d, %Y | at %I:%M %p")

    def get_timesince(self, instance):
        return timesince(instance.date_modified) + " ago"
