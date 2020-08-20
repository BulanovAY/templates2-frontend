import { Serializer as УчастникПроектаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-templates2-участник-проекта';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УчастникПроектаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
