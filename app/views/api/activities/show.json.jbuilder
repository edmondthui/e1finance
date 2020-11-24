json.set! @activity.id do
    json.id @activity.id
    json.activity @activity.activity
    json.value @activity.value
    json.created_at @activity.created_at
end