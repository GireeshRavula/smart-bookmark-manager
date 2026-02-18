from django.contrib import admin
from .models import Bookmark

admin.site.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'url', 'created_at')
    search_fields = ('title', 'url')
    ordering = ('-created_at',)