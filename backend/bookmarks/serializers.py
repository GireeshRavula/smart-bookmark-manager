from rest_framework import serializers
from .models import Bookmark

class BookmarkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bookmark
        fields = '__all__'

    def validate_title(self, value):
        if not value.strip():
            raise serializers.ValidationError("Title cannot be empty")
        return value

    def validate_url(self, value):
        instance = self.instance

        if Bookmark.objects.filter(url=value).exclude(
            id=getattr(instance, 'id', None)
        ).exists():
            raise serializers.ValidationError("This URL already exists")

        return value