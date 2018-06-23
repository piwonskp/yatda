from rest_framework import serializers, generics
from tasks.models import Task


class RetrieveTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('title', 'description', 'status', 'priority', 'difficulty')


class RetrieveTaskView(generics.RetrieveAPIView):
    serializer_class = RetrieveTaskSerializer
    queryset = Task.objects.all()
