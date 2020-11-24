@activities.each do |activity|
    json.set! activity.id do
        json.id activity.id
        json.activity activity.activity
        json.name activity.name
        json.value activity.value
        json.created_at activity.created_at.to_date
    end
end
