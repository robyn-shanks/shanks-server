exports.up = function (knex) {
    return knex.schema.createTable("paintings", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string('price').defaultTo('Please contact artist for price').alter(); 
        table.string("size").notNullable();
        table.boolean("available").defaultTo(true); 
        table.string("image"); 
    })
    .createTable("images", (table) => {
        table.increments("id").primary();
        table.integer("painting_id").unsigned().references("id").inTable("paintings").onDelete("CASCADE");
        table.string("url").notNullable(); 
        table.timestamps(true, true); 
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("images").then(() => {
        return knex.schema.dropTableIfExists("paintings");
    });
};
