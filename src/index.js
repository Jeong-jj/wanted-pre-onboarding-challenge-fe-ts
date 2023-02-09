/**
 * Todo data 설계
 * @class Todo
 * @param {number} id - 아이디(required)
 * @param {string} content - 내용(required)
 * @param {boolean} completed - 완료여부(required)
 * @param {string} category - 카테고리(required)
 * @param {string[]} [tags] - 태그들(optional)
 */
class todo {}

/**
 * CREATE - Todo 목록 추가하기
 * @function createTodo
 * @param {object} values - todo data(required)
 * @returns {object}
 */
function createTodo() {}

/**
 * READ - Todo 전체 목록 조회하기
 * @function getTodos
 * @returns {object}
 */
function getAllTodos() {}

/**
 * READ - 특정 할 일 조회하기
 * @function getTodo
 * @param {number} id - ID기반 대상 조회(required)
 * @returns {object}
 */
function getTodo(id) {}

/**
 * UPDATE - Todo 목록 수정
 * - id 제외 수정 가능
 * @function updateTodo
 * @param {number} id - ID기반 대상 조회(required)
 * @param {object} values - 수정된 todo data
 */
function updateTodo(id) {}

/**
 * UPDATE - 특정 할 일의 특정 태그를 수정
 * @function updateTags
 * @param {number} id - ID기반 대상 조회(required)
 * @param {object} tags - 수정된 tags data
 */
function updateTags(id) {}

/**
 * DELETE - 전체 Todo목록 삭제
 * @function deleteAllTodos
 */
function deleteAllTodos() {}

/**
 * DELETE - 특정 할 일 삭제
 * @function deleteTodo
 * @param {number} id - ID기반 대상 조회(required)
 */
function deleteTodo(id) {}

/**
 * DELETE - 특정 할 일의 모든 태그 제거
 * @function deleteAllTags
 */
function deleteAllTags() {}

/**
 * DELETE - 특정 할 일의 특정 태그 제거
 * @function deleteTag
 * @param {number} id - ID기반 대상 조회(required)
 */
function deleteTag(id) {}
