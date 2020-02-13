class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :dish_name
      t.string :image
      t.integer :time
      t.string :directions
      t.string :created_by
      t.timestamps
    end
  end
end
