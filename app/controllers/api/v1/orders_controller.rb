posted_line_foods = LineFood.where(id: params[:line_food_ids])
order = Order.new(
  total_price: total_price(posted_line_foods),
)
