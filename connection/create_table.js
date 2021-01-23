const knex = require('./knex_connection');

knex.schema.hasTable('courses').then((exists) => {
    if(!exists){
        return knex.schema.createTable('courses', (table) => {
            table.increments('id').primary();
            table.string('name');
            table.string('description')
        })
    }
})

knex.schema.hasTable('exercise').then((exists) => {
    if(!exists) {
        return knex.schema.createTable('exercise', (table) => {
            table.integer('id').unsigned().references('id').inTable('courses');
            table.integer('course_id')
            // .primary();
            table.string('name');
            table.string('description')
        })
    }
})

knex.schema.hasTable('chapter').then((exists) => {
    if(!exists) {
        return knex.schema.createTable('chapter', (table) => {
            table.integer('id').unsigned().references('id').inTable('courses');
            table.integer('course_id')
            // .unsigned().references('course_id').inTable('exercise');
            table.string('username');
            table.string('usersubmissions');
        })
    }
})