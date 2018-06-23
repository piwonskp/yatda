from rest_framework import serializers, generics
from tasks.models import Task


class ListTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'priority', 'difficulty')


class ListTasksView(generics.ListAPIView):
    serializer_class = ListTasksSerializer
    queryset = Task.objects.filter(status=Task.TODO).order_by('date_added').order_by('-priority')
