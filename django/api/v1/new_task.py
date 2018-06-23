from rest_framework import serializers, generics, mixins
from tasks.models import Task


class NewTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('title', 'description', 'priority', 'difficulty')


class NewTaskView(generics.CreateAPIView):
    serializer_class = NewTaskSerializer
