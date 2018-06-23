defmodule Yatda.TaskTest do
  use Yatda.ModelCase

  alias Yatda.Task

  @valid_attrs %{date_added: ~N[2010-04-17 14:00:00.000000], date_resolved: ~N[2010-04-17 14:00:00.000000], description: "some description", difficulty: 42, priority: 42, title: "some title"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Task.changeset(%Task{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Task.changeset(%Task{}, @invalid_attrs)
    refute changeset.valid?
  end
end
