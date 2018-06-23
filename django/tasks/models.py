from django.db import models


class Task(models.Model):
    TODO = 'todo'
    REJECTED = 'rejected'
    COMPLETED = 'completed'

    STATUS_CHOICES = ((TODO, 'To do'),
                      (REJECTED, 'Rejected'),
                      (COMPLETED, 'Completed')
    )

    title = models.CharField(max_length=127)
    description = models.TextField()
    priority = models.IntegerField()
    difficulty = models.IntegerField()

    status = models.CharField(max_length=15, default=TODO,
                              choices=STATUS_CHOICES)

    date_added = models.DateTimeField(auto_now_add=True)
