CREATE TABLE users (
  Id serial,
  FirstName varchar(64) NOT NULL,
  LastName varchar(64) NOT NULL,
  Age int
);

ALTER TABLE users ADD CONSTRAINT pkUser PRIMARY KEY (Id);

CREATE TYPE history_event_type AS ENUM ('created', 'updated');

CREATE TABLE users_history (
  Id serial,
  UserId integer NOT NULL,
  Event_type history_event_type NOT NULL,
  Event_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Event_data json
);

ALTER TABLE users_history ADD CONSTRAINT pkHistory PRIMARY KEY (Id);
ALTER TABLE users_history ADD CONSTRAINT fkHistoryUser FOREIGN KEY (UserId) REFERENCES users (Id) ON DELETE CASCADE;

-- Триггер подавляет попытки изменения строк в таблице users и, соответственно, добавление записей в
-- users_history, если нет фактических изменений. Замедляет работу, т.е. при отсутствии
-- необходимости - убрать.
CREATE TRIGGER zzz_min_update
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION suppress_redundant_updates_trigger();

