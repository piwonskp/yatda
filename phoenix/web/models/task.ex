defmodule Yatda.Task do
  use Yatda.Web, :model

  schema "tasks" do
    field :title, :string
    field :description, :string
    field :priority, :integer
    field :difficulty, :integer
    field :date_added, :naive_datetime
    field :date_resolved, :naive_datetime

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :description, :priority, :difficulty, :date_added, :date_resolved])
    |> validate_required([:title, :description, :priority, :difficulty])
  end
end
