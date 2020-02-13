class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :category
      t.string :ingredients, array: true
      t.references :recipes, null: false, foreign_key: true

      t.timestamps
    end
  end
end
