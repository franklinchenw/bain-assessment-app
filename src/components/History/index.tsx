import { doGetHistory } from "@/apis/geocoding";
import styles from "@/styles/page.module.css";
import { DistanceResult, DistanceMetadata, DistanceUnit } from "@/types/distance";
import { showError } from "@/utils/message";
import { Table } from "antd";
import type { TableProps } from "antd";
import { Typography } from "antd";
import { useState, useEffect } from "react";
const { Text } = Typography;

export default function History() {
  const [data, setData] = useState<DistanceResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    getHistory();
  }, [currentPage]);

  const getHistory = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * pageSize;
      const response = await doGetHistory({
        offset,
        limit: pageSize,
      });
      setData(response.results);
      setTotal(response.totalCount);
    } catch (error) {
      console.error(error);
      showError({
        title: "Failed to get history",
        content: "Something went wrong and the history failed to load.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns: TableProps<DistanceResult>['columns'] = [
    {
      title: 'Source Address',
      dataIndex: 'address1',
      key: 'address1',
    },
    {
      title: 'Destination Address',
      dataIndex: 'address2',
      key: 'address2',
    },
    {
      title: 'Distance in Miles',
      dataIndex: 'metadata',
      render: (metadata: DistanceMetadata, record: DistanceResult) => {
        if (record.unit === DistanceUnit.MI || record.unit === DistanceUnit.BOTH) {
          return metadata.distance.MI.toFixed(2)
        }
      }
    },
    {
      title: 'Distance in Kilometers',
      dataIndex: 'metadata',
      render: (metadata: DistanceMetadata, record: DistanceResult) => {
        if (record.unit === DistanceUnit.KM || record.unit === DistanceUnit.BOTH) {
          return metadata.distance.KM.toFixed(2)
        }
      }
    },
  ];

  return (
    <div className={styles.contentContainer}>
      <div className={styles.historyHeaderContainer}>
        <Text className={styles.historyTitle}>Historical Queries</Text>
        <Text className={styles.historyDescription}>
          History of the user's queries.
        </Text>
      </div>
      <Table
        className={styles.historyTable}
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          current: currentPage,
          total: total,
          pageSize: pageSize,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
} 