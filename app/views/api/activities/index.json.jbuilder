@activities.each do |activity|
    json.set! activity.id do
        json.id activity.id
        json.activity activity.activity
        json.value holding.value
        json.created_at holding.created_at
    end
end
