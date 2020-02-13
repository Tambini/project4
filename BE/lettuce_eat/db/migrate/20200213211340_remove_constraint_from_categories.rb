class RemoveConstraintFromCategories < ActiveRecord::Migration[6.0]
  def change
    change_column_null :categories, :recipes_id, true
  end
end
